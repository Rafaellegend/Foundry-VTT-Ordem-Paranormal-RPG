export default class OrdemSysItemSheet extends ItemSheet {
    get template(){
        return `systems/ordemsys/templates/sheets/${this.item.constructor.name}/${this.item.data.type}.hbs`;
    }

    getData() {
        const baseData = super.getData();
        let sheetData = {
            owner: this.item.isOwner,
            editable: this.isEditable,
            item: baseData.item,
            data: baseData.item.data.data,
            config: CONFIG.ordemsys
        }

        return sheetData;
    }
}