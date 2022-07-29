import { addViewToListingRoute } from './addViewToListing';
import { getAllListingsRoute } from './getAllListings';
import { getListingRoute } from './getListing';
import { getUserListingsRoute } from './getUserListings.js';
import { createNewListingRoute } from './createNewListing';
import { deleteListingRoute } from './deleteListing';
import { updateListingRoute } from './updateListing';
import { staticFilesRoute, filesRoutes } from './file';

export default [
    addViewToListingRoute,
    getAllListingsRoute,
    getListingRoute,
    getUserListingsRoute,
    createNewListingRoute,
    updateListingRoute,
    deleteListingRoute,
    staticFilesRoute, 
    ...filesRoutes,
];