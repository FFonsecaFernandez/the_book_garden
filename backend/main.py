from email.mime import message
from re import template
from fastapi.staticfiles import StaticFiles
from typing import Union
from fastapi import FastAPI, Request, Response
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel
import sqlite3

#app = FastAPI()

#app.mount("/static", StaticFiles(directory="../frontend/static"), name="static")
#template = Jinja2Templates(directory="../frontend")

#@app.get("/")
#async def read_root(req: Request):
#    return template.TemplateResponse("index.html", {"request":req,
#                                     "message":"prueba html con fastapi y jinja"})

#@app.get("/login")
#async def root_login(req: Request):
#    return template.TemplateResponse("login.html", {"request":req,
#                                     "message":"prueba html con fastapi y jinja"})


#class Item(BaseModel):
#    name: str
#    price: float
#    is_offer: Union[bool, None] = None

#@app.get("/items/{item_id}")
#async def read_item(item_id: int, q: Union[str, None] = None):
#    return {"item_id": item_id, "q": q}

#@app.put("/items/{item_id}")
#def update_item(item_id: int, item: Item):
#    return {"item_name": item.name, "item_id": item_id}

# db sqlite3


conexion=sqlite3.connect("cover.db")


conexion.execute("insert into cover_book(title,cover_url) values (?,?)", ("feo", "feo.jpg"))
conexion.commit()
cursor=conexion.execute("select codigo,title,cover_url from cover_book")
for fila in cursor:
    print(fila, "esta es la base de datos")
conexion.close()