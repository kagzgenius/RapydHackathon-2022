import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Hero } from '../components/Hero';

export function HomePage() {

    const [state, setState] = useState("");

    // useEffect(() =>
    //         getCheckoutLink()
    // )

    return (
        <div>
              <Hero />
            </div>
    )
}
