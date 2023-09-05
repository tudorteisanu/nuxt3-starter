import { sideMenu } from '../../settings/menu';

describe('template spec', () => {
	it('Counter test cases', () => {
		cy.visit('http://localhost:3001/');

		cy.get('[data-test="counter-increment"]').click();
		cy.get('[data-test="counter-value"]').should('contain.text', 1);

		cy.get('[data-test="counter-decrement"]').click();
		cy.get('[data-test="counter-value"]').should('contain.text', 0);
	});

	it('Menu test cases', () => {
		cy.visit('http://localhost:3001/');

		cy.get('[data-test="menu-toggle"]').click();
		cy.get('[data-test="menu-items"]').should('contain.text', sideMenu.map(item => item.title).join(''));
	});
});
