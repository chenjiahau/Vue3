from sqlalchemy.orm import Session
from models import App
from schemas.app_schema import AppOut

def get_all_apps(db: Session) -> list[AppOut]:
    apps = db.query(App).all()
    return [AppOut.from_orm(app) for app in apps]