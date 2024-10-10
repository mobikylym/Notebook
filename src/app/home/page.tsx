import PostsContainer from '@/components/posts/PostsContainer'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'NoteBook',
}

export default function HomePage() {

    return (
        <div>
            <PostsContainer />
        </div>
    );
};