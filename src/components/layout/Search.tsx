import { ChangeEventHandler, KeyboardEventHandler, MouseEventHandler } from "react";
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import tw, { styled } from 'twin.macro';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectSearchSliceValue, setSearchValue } from "../../redux/features/search/search.slice";
import { hasOnlySpace } from "../../utils/stringUtils";
// import useSearchInput from '../../../hooks/useSearchInput';

const Search = () => {
  // const { searchAttrs, value } = useSearchInput();
  const navigate = useNavigate();
  const value = useAppSelector(selectSearchSliceValue);
  const dispatch = useAppDispatch();

  const handleFormEntreKey: KeyboardEventHandler = (event) => {
    value && event.key === 'Enter' && navigate('/search')
  }

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    hasOnlySpace(event.target.value) && dispatch(setSearchValue(event.target.value));
  };

  const handleSearchButtonClick: MouseEventHandler = (event) => {
    value && navigate('/search');
  }

  return (
    // <Form onKeyDown={e => value && e.key === 'Enter' && navigate('/search')}>
    //   <Input {...searchAttrs} />
    //   <SearchIcon>
    //     <FiSearch onClick={() => value && navigate('/search')} />
    //   </SearchIcon>
    // </Form>
    <Form onKeyDown={handleFormEntreKey}>
      <Input placeholder="Search..." value={value} onChange={handleInputChange} />
      <SearchIcon>
        <FiSearch onClick={handleSearchButtonClick} />
      </SearchIcon>
    </Form>
  );
};

const Form = tw.div`relative max-w-search w-full`;

const Input = tw.input`text-black w-full outline-none pl-2 pr-12 py-2 border-2 rounded-md border-solid border-light-gray focus:(border-blue)`;

const SearchIcon = tw.div`absolute top-1 bottom-1 right-1 w-10 text-2xl hover:(bg-light-blue text-blue) flex items-center justify-center rounded-md cursor-pointer`;

export default Search;
