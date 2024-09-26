from typing import Generic, TypeVar, Optional
from pydantic import BaseModel
from sqlalchemy import Column, Integer, String, ARRAY, DateTime
from database import Base

T = TypeVar("T")

class ResponseModel(BaseModel, Generic[T]):
    code: int
    message: Optional[str] = None
    data: Optional[T]

class App(Base):
    __tablename__ = "apps"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50), unique=True, nullable=False)
    description = Column(String(255), nullable=True)
    created_at = Column(DateTime, nullable=False)
    updated_at = Column(DateTime, nullable=False)
