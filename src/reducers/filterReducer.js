const filterReducer = (state,action)=>{
    switch (action.type) {
      case "LOAD_FILTER_PRODUCTS":
        return {
          ...state,
          filter_products: [...action.payload],
          all_products: action.payload,
        };

      case "SET_GRID_VIEW":
        return {
          ...state,
          grid_view: true,
        };

      case "SET_LIST_VIEW":
        return {
          ...state,
          grid_view: false,
        };

      case "GET_SORT_VALUE":
        return {
          ...state,
          sorting_value: action.payload,
        };

      case "SORTING_PRODUCTS":
        let newSortData;
        let tempSortData = [...action.payload];

        if (state.sorting_value === "lowest") {
          newSortData = tempSortData.sort((a, b) => a.price - b.price);
        }
        if (state.sorting_value === "highest") {
          newSortData = tempSortData.sort((a, b) => b.price - a.price);
        }
        if (state.sorting_value === "a-z") {
          newSortData = tempSortData.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
        }
        if (state.sorting_value === "z-a") {
          newSortData = tempSortData.sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
        }
        return {
          ...state,
          filter_products: newSortData,
        };

      case "UPDATE_FILTER_VALUE":
        const { name, value } = action.payload;

        return {
          ...state,
          filters: {
            ...state.filters,
            [name]: value,
          },
        };

      case "FILTER_PRODUCTS":
        let { all_products } = state;
        let tempFilterProducts = [...all_products];

        const { text,category,company,color } = state.filters;

        if (text) {
          tempFilterProducts = tempFilterProducts.filter((e) => {
            return e.name.toLowerCase().includes(text);
          });
        }
        console.log(category,company,color)
        if(category.toLowerCase()!=="all"){
          tempFilterProducts = tempFilterProducts.filter((e) => {
            return e.category.toLowerCase() === category.toLowerCase();
          });
        }

        if(company.toLowerCase()!=="all"){
          tempFilterProducts = tempFilterProducts.filter((e) => {
            return e.company.toLowerCase() === company.toLowerCase();
          });
        }

        if(color!=="all"){
          tempFilterProducts = tempFilterProducts.filter((e) => {
            return e.colors.includes(color);
          });
        }

        return {
          ...state,
          filter_products: [...tempFilterProducts],
        };

      default:
        return {
          ...state,
        };
    }
}

export default filterReducer;