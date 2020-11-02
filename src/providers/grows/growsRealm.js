export const GROW_TABLE = 'Grow';
export const GrowSchema = {
  name: GROW_TABLE,
  primaryKey: 'id',
  properties: {
    id: {type: 'string'},
    title: {type: 'string'},
    description: {type: 'string'},
    image: {type: 'string'},
    createdAt: {type: 'date'},
    updatedAt: {type: 'date'},
  },
};
