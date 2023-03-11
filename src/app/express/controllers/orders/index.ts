import {
  addOrder,
  deleteOrder,
  getOrders,
  orderById,
  updateOrder,
} from "../../../../core/services/orders";
import { NextFunction, Request, Response } from "express";

export async function getOrdersList(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const data = await getOrders();
  res.json(data);
}

export async function addNewOrder(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const data = await addOrder(req.body);
  res.json(data);
}

export async function getOrderById(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const order = await orderById(req.params.id);
  res.json(order);
}

export async function deleteOrderById(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const order = await deleteOrder(req.params.id);
  res.json(order);
}

export async function updateOrderById(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const order = await updateOrder(req.params.id, req.body);
  res.json(order);
}
