import React from 'react';
import './styles.scss'
import { MenuItem, Button} from "@blueprintjs/core";
import {Select} from "@blueprintjs/select";
import {token_details} from "../../services/tokens_details";
import { ItemPredicate, ItemRenderer } from "@blueprintjs/select";

const CustomSelect = ({selectedItem,handleItemSelect}) => {
    const itemRenderer=(item, { handleClick, modifiers, query })=> {
        return (
            <MenuItem
                active={modifiers.active}
                disabled={modifiers.disabled}
                label={item.symbol}
                key={item.id}
                onClick={handleClick}
                text={item.id}
            />
        );
    }
    const createNewItemFromQuery=(itemName)=> {
        return itemName;
    }
    const createNewItemRenderer=(query, active, handleClick)=> {
        return <MenuItem text={'No result'} active={active}/>
        // return <MenuItem icon="add" text={`Create "${query}"`} active={active} onClick={handleClick} shouldDismissPopover={false} />;
    }
    const itemPredicate=(query, item, _index, exactMatch)=> {
        const normalizedDatasetName = item.symbol;
        const normalizedQuery = query.symbol;
        if (exactMatch) {
            return normalizedDatasetName === normalizedQuery;
        } else {
            return normalizedDatasetName.indexOf(normalizedQuery) >= 0;
        }
    }

    return (
        <Select
            items={token_details}
            // itemPredicate={itemPredicate}
            itemRenderer={itemRenderer}
            filterable={false}
            onItemSelect={handleItemSelect}
            noResults={<MenuItem disabled={true} text="No results" />}
            // createNewItemFromQuery={createNewItemFromQuery}
            createNewItemRenderer={createNewItemRenderer}
        >
            <Button text={selectedItem!==''?selectedItem:"Select Address"} rightIcon="caret-down" />
        </Select>
    );
}

export default CustomSelect;
