import {
    getProfile,
    login,
    logout,
    register,
    updateProfile
} from './auth';

// Mock apiClient
jest.mock('../apiClient', () => ({
  post: jest.fn((url, data) => Promise.resolve({ data: { url, ...data, token: 'mocktoken' } })),
  get: jest.fn((url) => Promise.resolve({ data: { url, user: { id: 1, name: 'Test' } } })),
  put: jest.fn((url, data) => Promise.resolve({ data: { url, ...data } })),
}));

describe('auth API', () => {
  it('registers a user', async () => {
    const data = { name: 'A', username: 'B', email: 'C', password: 'D' };
    const res = await register(data);
    expect(res.token).toBe('mocktoken');
    expect(res.name).toBe('A');
  });

  it('logs in a user', async () => {
    const data = { email: 'C', password: 'D' };
    const res = await login(data);
    expect(res.token).toBe('mocktoken');
    expect(res.email).toBe('C');
  });

  it('logs out a user', async () => {
    const res = await logout();
    expect(res.token).toBe('mocktoken');
  });

  it('gets profile', async () => {
    const res = await getProfile();
    expect(res.user.id).toBe(1);
  });

  it('updates profile', async () => {
    const data = { name: 'NewName' };
    const res = await updateProfile(data);
    expect(res.name).toBe('NewName');
  });
});
