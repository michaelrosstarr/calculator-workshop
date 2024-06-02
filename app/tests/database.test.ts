// database.test.ts
import { sql } from '@vercel/postgres';
import { getCalculations } from '../utils/database';

jest.mock('@vercel/postgres', () => ({
    sql: jest.fn(),
}));

describe('getUserById', () => {
    it('should fetch calculations', async () => {
        const mockCalculation = { first: '1', second: '2', answer: '3', type: '+' };
        (sql as unknown as jest.Mock).mockResolvedValue({ rows: [mockCalculation] });

        const user = await getCalculations();

        expect(user[0]).toEqual(mockCalculation);
    });
});
