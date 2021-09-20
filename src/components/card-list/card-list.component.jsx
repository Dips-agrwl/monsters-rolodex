import './card-list.styles.css';

import Card from 'components/card/card.component';

const CardList = props => ( 
  <div className='card-list'>
    { props.monsters.map(monster => 
      <Card key={monster.id} monster={monster}/>
    )}
  </div>
);

export default CardList;
