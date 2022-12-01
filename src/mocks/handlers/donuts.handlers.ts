import getDonutResponse from 'mocks/dummies/donuts/get.donut.response';
import listDonutsResponse from 'mocks/dummies/donuts/list.donuts.response';
import { rest } from 'msw';

export default [
  rest.get('*/donuts', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(listDonutsResponse));
  }),
  rest.get('*/cards/:id', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(getDonutResponse));
  }),
];
