import { Button, Card } from 'flowbite-react';
import { FooterDivider } from 'flowbite-react/lib/esm/components/Footer/FooterDivider';
import React, { useState } from 'react';
import Rating from 'react-rating';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { IconContext } from "react-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Recipe.css';

const Recipe = ({ recipe }) => {
    const { id, name, ingredients, method, rating, pic_url } = recipe;
    const [clicked, setClicked] = useState(false);
    const notify = () => toast("Recipe Added to Favorite!!!");
    return (
        <div>
            <div className="max-w-md">
                <Card
                    horizontal={false}
                    imgSrc={pic_url}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name}
                    </h5>
                    <div className='mb-2'>
                        <span className='text-black font-semibold mb-3 block'>Ingredients:</span>
                        <p className="font-normal text-gray-900 dark:text-gray-400 grid grid-cols-2 gap-1">
                            {
                                ingredients.map((ingredient, id) => <li key={id} className='list-none'>{ingredient}</li>)
                            }
                        </p>
                    </div>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        <span className='text-black font-semibold'>Cooking Method:</span> <br />
                        {method}
                    </p>
                    <FooterDivider className='fd'></FooterDivider>
                    <div className='flex justify-between items-center'>
                        <IconContext.Provider value={{ color: "tomato", className: "global-class-name", size: "1.2rem" }}>
                            <Rating
                                placeholderRating={rating}
                                emptySymbol={<AiOutlineStar></AiOutlineStar>}
                                placeholderSymbol={<AiFillStar></AiFillStar>}
                                fullSymbol={<AiFillStar></AiFillStar>}
                                readonly
                            />
                        </IconContext.Provider>

                        <Button onClick={() => {notify(); setClicked(!clicked);}} className='' color="failure" pill={true} disabled={clicked}>
                            Add to Favorite
                        </Button>
                    </div>
                    <ToastContainer></ToastContainer>
                </Card>
            </div>
        </div>
    );
};

export default Recipe;