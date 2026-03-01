import { render } from '@testing-library/svelte';
import Avatar from './lib/Avatar.svelte';

describe('Avatar component', () => {
  test('Avatar tests', () => {
    const container = render(Avatar, {});
    expect(container).toBeDefined();
  });
});
