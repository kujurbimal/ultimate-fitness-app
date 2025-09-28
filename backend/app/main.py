from fastapi import FastAPI, HTTPException, Depends, UploadFile, File
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime
import uuid

app = FastAPI(title="Ultimate Fitness App API - Scaffold")

# --- Simple in-memory stores (replace with DB in production) ---
USERS = {}
FOODS = {}
MEALS = {}
ACTIVITIES = {}

class SignUpRequest(BaseModel):
    email: str
    password: str
    name: Optional[str]

class LoginRequest(BaseModel):
    email: str
    password: str

@app.post('/auth/signup')
def signup(req: SignUpRequest):
    if req.email in USERS:
        raise HTTPException(400, 'User already exists')
    user_id = str(uuid.uuid4())
    USERS[req.email] = { 'id': user_id, 'email': req.email, 'password': req.password, 'name': req.name}
    return {'id': user_id, 'email': req.email}

@app.post('/auth/login')
def login(req: LoginRequest):
    user = USERS.get(req.email)
    if not user or user['password'] != req.password:
        raise HTTPException(401, 'Invalid credentials')
    return {'message': 'ok', 'token': 'fake-jwt-token-for-{}'.format(user['id'])}

class FoodItem(BaseModel):
    name: str
    calories: Optional[int] = None

@app.post('/foods', status_code=201)
def create_food(food: FoodItem):
    food_id = str(uuid.uuid4())
    FOODS[food_id] = {'id': food_id, 'name': food.name, 'calories': food.calories}
    return FOODS[food_id]

@app.get('/foods', response_model=List[dict])
def list_foods(q: Optional[str] = None):
    items = list(FOODS.values())
    if q:
        items = [f for f in items if q.lower() in f['name'].lower()]
    return items

class MealCreate(BaseModel):
    user_id: str
    items: List[dict]

@app.post('/meals', status_code=201)
def create_meal(meal: MealCreate):
    meal_id = str(uuid.uuid4())
    MEALS[meal_id] = {'id': meal_id, 'user_id': meal.user_id, 'items': meal.items, 'created_at': datetime.utcnow().isoformat()}
    return MEALS[meal_id]

@app.get('/meals/{user_id}')
def get_meals(user_id: str):
    return [m for m in MEALS.values() if m['user_id'] == user_id]

class ActivityCreate(BaseModel):
    user_id: str
    type: str
    distance_m: Optional[float] = None

@app.post('/activities', status_code=201)
def create_activity(a: ActivityCreate):
    aid = str(uuid.uuid4())
    ACTIVITIES[aid] = {'id': aid, 'user_id': a.user_id, 'type': a.type, 'distance_m': a.distance_m, 'created_at': datetime.utcnow().isoformat()}
    return ACTIVITIES[aid]

@app.get('/activities/{user_id}')
def list_activities(user_id: str):
    return [a for a in ACTIVITIES.values() if a['user_id'] == user_id]

