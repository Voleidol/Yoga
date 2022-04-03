describe('Таймер', function() {
    it("Возвращает ли функция объект?", function() {
        assert.typeOf(getTimeRemainig(), 'object')
    })

    it("Возвращает ли функция строку?", () => {
        assert.typeOf(setClock('timer', deadLine), 'string')
    })

    describe('Общая сумма', function() {
        it("Изначально равен 0", () => {
            assert.equal(total, 0);
        })
    })
});
