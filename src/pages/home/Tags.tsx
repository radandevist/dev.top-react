import { useEffect } from 'react';
import tw from 'twin.macro';
// import { useGetNumTagsQuery } from '../../../core/features/tags/tagsApiSlice';
import Tag from './Tag';
import { ITag } from "../../types/tag.types";
import { IPost } from "../../types/post.types";

const Tags = () => {
    // const { data: tags } = useGetNumTagsQuery(null, { refetchOnMountOrArgChange: true });
    const tags: (ITag & { // TODO: Replace
      posts: IPost[]; 
    })[] = [ // ! Temporry hardcoded value !
      {
        name: 'React',
        posts: [],
        id: 'fsdfs',
        color: '#000',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ];

    return <Wrapper>{tags && tags.map((tag, i) => <Tag tag={tag} key={i} />)}</Wrapper>;
};

const Wrapper = tw.div`w-1/2 flex flex-col gap-sm`;
// const Wrapper = tw.div`w-full flex flex-col gap-sm`;


export default Tags;
