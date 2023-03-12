import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ReactFC } from '../../types/types';
import InputField from '../common/InputField';

type SearchHeaderProps = {
    value: string;
    onChange: (v: string) => void;
    baseCurrency: string;
};

const SearchHeader: ReactFC<SearchHeaderProps> = ({ value, onChange, baseCurrency }) => {
    const [queryString, setSearchParams] = useSearchParams();

    useEffect(() => onChange(queryString.get('q') ?? ''), []);

    const handleChange = (value: string) => {
        onChange(value);
        setSearchParams({ q: value });
    };

    return (
        <div className="sticky-container">
            <div className="search-input-container">
                <InputField value={value} onChange={handleChange} placeholder="Search..." />
            </div>
            <div className="items-header">
                <p className="currency">Currency</p>
                <p>
                    Buy / Sell <b>{baseCurrency}</b>
                </p>
            </div>
        </div>
    );
};

export default SearchHeader;