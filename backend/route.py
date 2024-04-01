from fastapi import APIRouter,status
from models import info,Login
from database import collection_name
from schemas import information_info
from passlib.context import CryptContext
from pymongo.mongo_client import MongoClient

router=APIRouter()

db=MongoClient("mongodb://localhost:27017")
pxt_cd=CryptContext(schemes=["bcrypt"],deprecated="auto")

@router.get("/")
async def get(Name:str):
    conn=information_info(collection_name.find({'name':Name}))
    for x in conn:
        return x
    else:
        return "User Not Found"
@router.post("/post",status_code=status.HTTP_201_CREATED)
async def post(user:info):
    hashedpassword=pxt_cd.hash(user.password)   
    conn=collection_name.insert_one(
        {'name':user.name,
         "email":user.email,
         "mobile":user.mobile,
         "password":hashedpassword})
    if conn:
        return "Username Created Successfully"
    else:
        return "Username not created"
@router.post("/login",status_code=status.HTTP_200_OK)
async def login(login:Login):
    conn=information_info(collection_name.find({'name':login.name}))
    for user in conn:
        verify_password=pxt_cd.verify(login.password,user["password"])
        if verify_password and login.name==user["name"]:
            # return { "name":user['name'] ,"email":user['email'],"mobile":user['mobile']}
            return "LOGIN SUCCESSFUL"
    else:
        return "User Not Found/Invalid credentials"