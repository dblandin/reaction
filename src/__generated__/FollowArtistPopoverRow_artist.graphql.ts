/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
declare const _FollowArtistPopoverRow_artist$ref: unique symbol;
export type FollowArtistPopoverRow_artist$ref = typeof _FollowArtistPopoverRow_artist$ref;
export type FollowArtistPopoverRow_artist = {
    readonly _id: string;
    readonly name: string | null;
    readonly image: ({
        readonly cropped: ({
            readonly url: string | null;
        }) | null;
    }) | null;
    readonly " $refType": FollowArtistPopoverRow_artist$ref;
};



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "FollowArtistPopoverRow_artist",
  "type": "Artist",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "_id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "image",
      "storageKey": null,
      "args": null,
      "concreteType": "Image",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "cropped",
          "storageKey": "cropped(height:45,width:45)",
          "args": [
            {
              "kind": "Literal",
              "name": "height",
              "value": 45,
              "type": "Int!"
            },
            {
              "kind": "Literal",
              "name": "width",
              "value": 45,
              "type": "Int!"
            }
          ],
          "concreteType": "CroppedImageUrl",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "url",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "ScalarField",
          "alias": "__id",
          "name": "id",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "__id",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '19a1f04c0c344e48b118ba6835c53d5a';
export default node;
