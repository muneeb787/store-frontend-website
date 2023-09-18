import PropTypes from 'prop-types';


const FilterCategory = ({ categories }) => {
    return (
        <div className="mb-4 text-center">
            <div className="flex justify-center mt-2 px-20 text-he">
                {categories.map((category,index) => (
                    <button key={index} className=" cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" data-filter="*">
                        {category.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

FilterCategory.propTypes = {
    categories: PropTypes.array.isRequired,
};


export default FilterCategory
