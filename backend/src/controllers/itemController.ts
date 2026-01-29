import { Request, Response, NextFunction } from "express";
import { getDB } from "../db/db";
import { AppError } from "../middlewares/errorHandler";

export const getItems = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const db = await getDB();
        const items = db.data.items;
        res.json(items);
    } catch (error) {
        next(error);
    }
}

export const getItemById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const db = await getDB();
        const items = db.data.items;
        const result = items.find(item => item.id === parseInt(req.params.id as string));
        if (!result) {
            throw new AppError('Item not found', 404);
        }
        res.json(result);
    } catch (error) {
        next(error);
    }
}
export const createItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const db = await getDB();
        const items = db.data.items;
        
        const newItem = {
            ...req.body,
            id: items.length + 1,
            createdAt: new Date(Date.now())
        };
        items.push(newItem);
        await db.write();
        res.status(201).json(newItem);
    } catch (error) {
        next(error);
    }
}
export const updateItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const db = await getDB();
        const items = db.data.items;
        const id = parseInt(req.params.id as string);
        const idx = items.findIndex(item => item.id === id);
        if (idx < 0) {
            throw new AppError('Item not found', 404);
        }
        const updatedItem = {
            ...req.body,
            id,
            createdAt: items[idx]?.createdAt
        };
        items[idx] = updatedItem;
        await db.write();
        res.json(updatedItem);
    } catch (error) {
        next(error);
    }
}
export const deleteItemById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const db = await getDB();
        const items = db.data.items;
        const id = parseInt(req.params.id as string);
        const idx = items.findIndex(item => item.id === id);
        if (idx < 0) {
            throw new AppError('Item not found', 404);
        }
        items.splice(idx, 1);
        await db.write();
        res.status(200);
    } catch (error) {
        next(error);
    }
}