from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from schemas.app_schema import AppOut
from models import ResponseModel
from database import SessionLocal
from controllers import app_ctrl

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("", response_model=ResponseModel[List[AppOut]])
def get_apps(db: Session = Depends(get_db)) -> ResponseModel[List[AppOut]]:
    try:
        apps = app_ctrl.get_all_apps(db)
        return ResponseModel(code=200, message="Apps retrieved successfully", data=apps)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))