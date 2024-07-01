# Rule: Commencis Copyright Notice (`commencis/copyright-text`)

Ensure files start with the Commencis copyright text.

## Rule Details

This rule ensures that files begin with a specific copyright notice format. The format is defined as follows:

```
/*
 * Copyright {startYear}-{currentYear} Commencis. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Commencis.
 * Any reproduction of this material must contain this notice.
 */
```

Where:

- `{startYear}` is a placeholder for the starting year of the copyright notice.
- `{currentYear}` is a placeholder for the current year dynamically obtained at runtime.

## Options

You can configure the rule with the following options:

- `startYear`: Specify the starting year for the copyright notice. Default is `2017`.

## Examples

### Valid

```javascript
/*
 * Copyright 2017-2024 Commencis. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Commencis.
 * Any reproduction of this material must contain this notice.
 */

import React from 'react';
```

## Options Configuration

```json
{
  "rules": {
    "copyright-text": [
      "warn",
      {
        "startYear": 2017
      }
    ]
  }
}
```
