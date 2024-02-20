/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * OpenCRVS is also distributed under the terms of the Civil Registration
 * & Healthcare Disclaimer located at http://opencrvs.org/license.
 *
 * Copyright (C) The OpenCRVS Authors located at https://github.com/opencrvs/opencrvs-core/blob/master/AUTHORS.
 */

import { Request, ResponseToolkit } from '@hapi/hapi'
import { readFileSync } from 'fs'

export async function certificateHandler(_: Request, h: ResponseToolkit) {
  const Certificates = [
    {
      event: 'birth',
      fileName: 'India-birth-certificate-v2.svg',
      svgCode: readFileSync(
        './src/data-seeding/certificates/source/India-birth-certificate-v2.svg'
      ).toString()
    },
    {
      event: 'death',
      fileName: 'India-death-certificate-v2.svg',
      svgCode: readFileSync(
        './src/data-seeding/certificates/source/India-death-certificate-v2.svg'
      ).toString()
    },
    {
      event: 'marriage',
      fileName: 'India-marriage-certificate-v2.svg',
      svgCode: readFileSync(
        './src/data-seeding/certificates/source/India-marriage-certificate-v2.svg'
      ).toString()
    }
  ]
  const res = JSON.stringify(Certificates)
  return h.response(res)
}
