import { persistEvent } from '../service/eventService.js';

import { Router } from 'express';
var router = Router();

/* GET Events */
router.get('/', (req, res) => {
    // res.render('index', { title: 'Express' });
    res.status(200).send({"event": "eventDataa"})
});


router.post('/', (req, res) => {
  const newEvent = req.body;
  const createdEvent = persistEvent(newEvent);
  res.status(201).send(createdEvent);
});

export default router;
