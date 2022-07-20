import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getCheckoutLink } from '../../server/server';
import { Hero } from '../components/Hero';

export function HomePage() {

    const [state, setState] = useState("");

    // useEffect(() =>
    //         getCheckoutLink()
    // )

    return (
        <div>
            <div>
              <Hero />
            </div>
            <h1>
                Welcome to the home page.
            </h1>
            <h2>
                This redirects to the checkout:
                {state}
            </h2>

        </div>
    )
}
