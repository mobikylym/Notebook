'use client';
import styles from './TagsMenu.module.scss'

import useActiveLink from '@/hooks/useActiveLink'

import TagsMenuLink from "./TagsMenuLink/TagsMenuLink";

const TagsMenu = () => {

    const isSportActive = useActiveLink('/home/sport');
    const isNatureActive = useActiveLink('/home/nature');
    const isFoodActive = useActiveLink('/home/food');

    const isGamesActive = useActiveLink('/home/games');
    const isTravelActive = useActiveLink('/home/travel');
    const isPlacesActive = useActiveLink('/home/places');

    return (
        <div>
            <h1 className={styles['posts__title']}>Все теги:</h1>
            <ul className={styles['list-tags']}>
                <li>
                    <TagsMenuLink href="/home/sport" isActive={isSportActive}>
                        sport
                    </TagsMenuLink>
                </li>
                <li>
                    <TagsMenuLink href="/home/nature" isActive={isNatureActive}>
                        nature
                    </TagsMenuLink>
                </li>
                <li>
                    <TagsMenuLink href="/home/food" isActive={isFoodActive}>
                        food
                    </TagsMenuLink>
                </li>

                <li>
                    <TagsMenuLink href="/home/games" isActive={isGamesActive}>
                        games
                    </TagsMenuLink>
                </li>

                <li>
                    <TagsMenuLink href="/home/travel" isActive={isTravelActive}>
                        travel
                    </TagsMenuLink>
                </li>

                <li>
                    <TagsMenuLink href="/home/places" isActive={isPlacesActive}>
                        places
                    </TagsMenuLink>
                </li>
            </ul>
        </div>
    );
};

export default TagsMenu;