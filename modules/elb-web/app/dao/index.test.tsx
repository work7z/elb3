import fn from './index'

import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

test('Page', async () => {
    let fnTest = await fn("test")
    
})