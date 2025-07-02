import { Request, Response } from 'express';
import { Research, User } from '../models';

export const createResearch = async (req: Request, res: Response) => {
  try {
    const research = await Research.create(req.body);
    res.json(research);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create research' });
  }
};

export const getResearches = async (_req: Request, res: Response) => {
  try {
    const researches = await Research.findAll({ include: User });
    res.json(researches);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get researches' });
  }
};

// research.controller.ts
export const getResearcheByUserId = async (req: Request, res: Response) => {
  try {
    const whereClause = req.query.userId ? { userId: req.query.userId } : undefined
    const researches = await Research.findAll({ where: whereClause, include: User })
    res.json(researches)
  } catch (err) {
    res.status(500).json({ error: 'Failed to get researches' })
  }
}
