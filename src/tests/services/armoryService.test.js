// tests/services/armoryService.test.js
import armoryService from '@/services/armoryService';
import axios from 'axios';

jest.mock('axios');

describe('armoryService', () => {
    it('should fetch all armories', async () => {
        const armoryItems = [{ id: 1, name: 'Sword', level: 1 }];
        axios.get.mockResolvedValue({ data: armoryItems });

        const response = await armoryService.getAllArmories();
        expect(response.data).toEqual(armoryItems);
    });

    it('should handle fetch error', async () => {
        axios.get.mockRejectedValue(new Error('Network Error'));

        try {
            await armoryService.getAllArmories();
        } catch (error) {
            expect(error.message).toBe('Network Error');
        }
    });
});
