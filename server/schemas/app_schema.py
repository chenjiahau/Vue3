from pydantic import BaseModel
from typing import Optional

class AppBase(BaseModel):
    name: str
    description: Optional[str] = None
    created_at: Optional[str] = None
    updated_at: Optional[str] = None

class AppOut(AppBase):
    id: int

    class Config:
        orm_mode = True