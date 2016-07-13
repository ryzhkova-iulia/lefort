/**
 * Created by julia on 12.07.2016.
 */
module.exports = function(bh) {
    bh.match('generation-menu', function(ctx, json) {
        ctx.tag('ul');

        var elements = [];
        var items = ctx.param("items") || [];

        for (var i = 0; i < items.length; i++)
        {
            elements.push({
                elem: 'item',
                tag: 'li',
                content : items[i]
            });
        }

        ctx.content(elements);
    });
};