import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../recipe-card/RecipeCard';
import './RecipeList.scss';

interface props {
	listTitle: string;
}

const RecipeList: React.FC<props> = (props) => {
	return (
		<div>
			<div className='recipe-list'>
				<div>
					<h2>{props.listTitle}</h2>
				</div>
				<div className='list-container'>
					{props.listTitle === 'Top Recipes' ? (
						<div className='inner'>
							<Link
								to='/recipe'
								style={{ textDecoration: 'none', color: '#362917' }}>
								<RecipeCard
									img='http://www.recipessquared.com/wp-content/uploads/2015/01/Spaghetti-Carbonara.jpg'
									title='Spaghetti Carbonara'
									variant='Vegetarian'
									author='alexanderjaye'
								/>
							</Link>
							<RecipeCard
								img='https://production-media.gousto.co.uk/cms/mood-image/769---Chicken-Katsu-Curry-2.jpg'
								title='Katsu Curry'
								variant='wagamama style'
								author='freddiejameson'
							/>
							<RecipeCard
								img='https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2018/06/Easy-mushroom-risotto.jpg'
								title='Mushroom Risotto'
								variant="nan's favourite"
								author='patrickmahomes'
							/>
							<RecipeCard
								img='https://realfood.tesco.com/media/images/KORMA-1400x919-7b02c527-02dd-4f57-aac0-fdbb1ea2e993-0-1400x919.jpg'
								title='Korma'
								variant='South Indian'
								author='ahmadbradshaw'
							/>
							<RecipeCard
								img='https://www.bing.com/th?id=AMMS_9b98cc9fb7d08bd6a615dbe73f64674f&w=300&h=300&c=7&rs=1&qlt=80&cdv=1&dpr=2&pid=16.1'
								title='Irish Stew'
								variant='Dumplings'
								author='freddiejameson'
							/>
							<RecipeCard
								img='https://theprimepursuit.files.wordpress.com/2013/01/dsc06663.jpg'
								title='Thai Green Curry'
								variant='Twyford Elephant'
								author='penelopepitstop'
							/>
						</div>
					) : (
						<div className='inner'>
							<RecipeCard
								img='https://www.simplyrecipes.com/wp-content/uploads/2015/03/irish-beef-stew-horiz-a2-1800.jpg'
								title='Irish Stew'
								variant='Dumplings'
								author='freddiejameson'
							/>
							<RecipeCard
								img='https://theprimepursuit.files.wordpress.com/2013/01/dsc06663.jpg'
								title='Thai Green Curry'
								variant='Twyford Elephant'
								author='penelopepitstop'
							/>
							<RecipeCard
								img='https://realfood.tesco.com/media/images/KORMA-1400x919-7b02c527-02dd-4f57-aac0-fdbb1ea2e993-0-1400x919.jpg'
								title='Korma'
								variant='South Indian'
								author='ahmadbradshaw'
							/>
							<RecipeCard
								img='https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2018/06/Easy-mushroom-risotto.jpg'
								title='Mushroom Risotto'
								variant="nan's favourite"
								author='patrickmahomes'
							/>
							<RecipeCard
								img='https://production-media.gousto.co.uk/cms/mood-image/769---Chicken-Katsu-Curry-2.jpg'
								title='Katsu Curry'
								variant='wagamama style'
								author='freddiejameson'
							/>
							<RecipeCard
								img='http://www.recipessquared.com/wp-content/uploads/2015/01/Spaghetti-Carbonara.jpg'
								title='Spaghetti Carbonara'
								variant='Vegetarian'
								author='alexanderjaye'
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default RecipeList;
