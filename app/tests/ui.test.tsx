import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Calculator from 'app/components/calculator'

describe('Page', () => {
    it('renders all buttons with their respective IDs', () => {
        render(<Calculator rows={[]} addEntry={() => { }} />);
        const buttons = [
            'addition',
            'subtraction',
            'multiply',
            'divide',
            'openBracket',
            'closeBracket',
            'equals',
        ];
        buttons.forEach((id) => {
            const button = screen.getByTestId(id);
            expect(button).toBeInTheDocument();
        });
    })

    it('renders all keypad buttons with their respective IDs', () => {
        render(<Calculator rows={[]} addEntry={() => { }} />);
        const buttons = ['C', 'D', 'E', 'F', '8', '9', 'A', 'B', '4', '5', '6', '7', '0', '1', '2', '3'];
        buttons.forEach((id) => {
            const button = screen.getByTestId(`key-${id}`);
            expect(button).toBeInTheDocument();
        });
    })

    it('checks if Enter a number is rendered on first load', () => {
        render(<Calculator rows={[]} addEntry={() => { }} />);
        const div = screen.getByTestId('entryArea');
        expect(div.textContent).toBe('Enter a number');
    })

    it('click a button and see if the corresponding number apprears in the entry area', () => {

        render(<Calculator rows={[]} addEntry={() => { }} />);
        const button = screen.getByTestId('key-1');
        expect(button).toBeInTheDocument();
        fireEvent.click(button);

        const div = screen.getByTestId('entryArea');

        expect(div.textContent).toBe('1');
    })

    it('click 3 buttons and see if the corresponding numbers apprears in the entry area', () => {

        render(<Calculator rows={[]} addEntry={() => { }} />);

        const buttons = ['A', '1', 'C'];

        buttons.forEach((id) => {
            const button = screen.getByTestId(`key-${id}`);
            expect(button).toBeInTheDocument();
            fireEvent.click(button);
        });

        const div = screen.getByTestId('entryArea');

        expect(div.textContent).toBe('A1C');
    })

    it('click 4 buttons and see if only the first 3 get accepted', () => {

        render(<Calculator rows={[]} addEntry={() => { }} />);

        const buttons = ['A', '1', 'C', 'D'];

        buttons.forEach((id) => {
            const button = screen.getByTestId(`key-${id}`);
            expect(button).toBeInTheDocument();
            fireEvent.click(button);
        });

        const div = screen.getByTestId('entryArea');

        expect(div.textContent).toBe('A1C');
    })

    it('click 3 buttons and see if the corresponding numbers apprears in the entry area and then clear', () => {
        render(<Calculator rows={[]} addEntry={() => { }} />);

        const buttons = ['A', '1', 'C'];

        buttons.forEach((id) => {
            const button = screen.getByTestId(`key-${id}`);
            expect(button).toBeInTheDocument();
            fireEvent.click(button);
        });

        const div = screen.getByTestId('entryArea');

        expect(div.textContent).toBe('A1C');

        const clearButton = screen.getByTestId('clear');
        expect(clearButton).toBeInTheDocument();
        fireEvent.click(clearButton);

        expect(div.textContent).toBe('Enter a number');
    })

    it('do a basic calculation and see if the correct result shows', () => {
        render(<Calculator rows={[]} addEntry={() => { }} />);

        const buttons = ['key-1', 'addition', 'key-1', 'equals'];

        buttons.forEach((id) => {
            const button = screen.getByTestId(id);
            expect(button).toBeInTheDocument();
            fireEvent.click(button);
        });

        const div = screen.getByTestId('entryArea');

        expect(div.textContent).toBe('Answer: 2');
    })

    it('do a basic chained calculation and see if the correct calculation shows', () => {
        render(<Calculator rows={[]} addEntry={() => { }} />);

        const buttons = ['key-1', 'addition', 'key-1', 'equals', 'multiply', 'key-2', 'equals'];

        buttons.forEach((id) => {
            const button = screen.getByTestId(id);
            expect(button).toBeInTheDocument();
            fireEvent.click(button);
        });

        const div = screen.getByTestId('entryArea');

        expect(div.textContent).toBe('Answer: 4');
    })

})