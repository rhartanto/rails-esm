import { sum, CountTableRows } from '../app/javascript/utils';

beforeEach(() => {
  document.body.innerHTML = ``;
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


test('CountTableRows', () => {
  document.body.innerHTML = `
     <table id="books-table">
      <thead>
        <tr>
          <th>Title</th><th>Author</th>
        </tr>
      </thead>
      <tbody>
          <tr>
            <td>Business Stories</td><td>Bloomberg</td>
          </tr>
          <tr>
            <td>Programming Python</td><td>Guido Van Rossum</td>
          </tr>
      </tbody>
    </table> 
  `;
  expect(CountTableRows('books-table')).toBe(2);
});

test('huh', () => {
  expect(CountTableRows('books-table')).toBe(0);
});