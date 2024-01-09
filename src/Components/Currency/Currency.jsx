import React from 'react';
import { formattedCurrency } from '../../utils/helpers';

const Currency = ({ item }) => {
  const totalCost = parseInt(item?.quantity) * parseFloat(item.price.replace("$", ""));
  const formattedTotalCost = formattedCurrency(totalCost.toFixed(2));

  return (
    <div>
      <p className="text-base font-medium">{formattedTotalCost}</p>
    </div>
  );
};

export default Currency;
