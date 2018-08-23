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
    switch (action.type) {
        case  'ADD_BOOK':
            return [
              ...state,
              action.payload
            ];
        case  'DELETE_BOOK':
          const newArr = [
          ...state.slice(0, action.payload), 
          ...state.slice(action.payload+1), 
        ]
            return newArr;

        default:
          return state;
  }
};