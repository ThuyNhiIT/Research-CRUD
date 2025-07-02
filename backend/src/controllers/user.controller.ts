import { Request, Response } from 'express';
import { User } from '../models';

// Tạo user mới
export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create user' });
  }
};

// Lấy danh sách users
export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get users' });
  }
};

// Cập nhật user theo ID
export const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const [updated] = await User.update(req.body, { where: { id } });
    if (updated) {
      const updatedUser = await User.findByPk(id);
      return res.json(updatedUser);
    }
    res.status(404).json({ error: 'User not found' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update user' });
  }
};

// Xóa user theo ID
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deleted = await User.destroy({ where: { id } });
    if (deleted) {
      return res.json({ message: 'User deleted successfully' });
    }
    res.status(404).json({ error: 'User not found' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
};
