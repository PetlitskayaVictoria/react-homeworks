import React from 'react'
import {Provider} from 'react-redux'
import store from "../h10/bll/store";

const ProviderDecorator = (storyFn: any) => (
    <Provider store={store}>
        {storyFn()}
    </Provider>
)

export default ProviderDecorator;
