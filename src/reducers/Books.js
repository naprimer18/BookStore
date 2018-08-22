const initialState = [
{
  id:"322",
  name:"Название: Богатый папа бедный папа ,Автор : Роберт Киосаки , Стоимость 25 BYN"
},

{
  id:"644",
  name:"Название: Красное и черное  ,Автор : Стендаль , Стоимость 35 BYN"
}
];

export default function books(state = initialState, action) {
  if (action.type === 'ADD_BOOK') {
    return [
      ...state,
      action.payload
    ];
  } 
  return state;
}
