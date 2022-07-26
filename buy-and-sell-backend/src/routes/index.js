import { addViewToListingRoute } from './addViewToListing';
import { getAllListingsRoute } from './getAllListings';
import { getListingRoute } from './getListing';
import { getUserListingsRoute } from './getUserListings.js';
import { createNewListingRoute } from './createNewListing';
import { deleteListingRoute } from './deleteListing';
import { updateListingRoute } from './updateListing';


export default [
    addViewToListingRoute,
    getAllListingsRoute,
    getListingRoute,
    getUserListingsRoute,
    createNewListingRoute,
    updateListingRoute,
    deleteListingRoute,
];