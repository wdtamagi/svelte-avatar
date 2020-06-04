import { render } from '@testing-library/svelte';
import Avatar from './Avatar.svelte';

jest.mock('initials', () => ({
  default: (f) => f,
}));

describe('Avatar component', () => {
  test('Avatar tests', () => {
    const container = render(Avatar, {});
    expect(container).toBeDefined();
  });
});
