/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
declare const _RelatedCollectionEntity_collection$ref: unique symbol;
export type RelatedCollectionEntity_collection$ref = typeof _RelatedCollectionEntity_collection$ref;
export type RelatedCollectionEntity_collection = {
    readonly headerImage: string | null;
    readonly slug: string;
    readonly title: string;
    readonly price_guidance: number | null;
    readonly artworks: ({
        readonly hits: ReadonlyArray<({
            readonly artist: ({
                readonly name: string | null;
            }) | null;
            readonly title: string | null;
            readonly image: ({
                readonly url: string | null;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly " $refType": RelatedCollectionEntity_collection$ref;
};



const node: ConcreteFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": "__id",
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "RelatedCollectionEntity_collection",
  "type": "MarketingCollection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "headerImage",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "slug",
      "args": null,
      "storageKey": null
    },
    v0,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "price_guidance",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "artworks",
      "storageKey": "artworks(size:3,sort:\"-decayed_merch\")",
      "args": [
        {
          "kind": "Literal",
          "name": "size",
          "value": 3,
          "type": "Int"
        },
        {
          "kind": "Literal",
          "name": "sort",
          "value": "-decayed_merch",
          "type": "String"
        }
      ],
      "concreteType": "FilterArtworks",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "hits",
          "storageKey": null,
          "args": null,
          "concreteType": "Artwork",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "artist",
              "storageKey": null,
              "args": null,
              "concreteType": "Artist",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "name",
                  "args": null,
                  "storageKey": null
                },
                v1
              ]
            },
            v0,
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
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "url",
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "version",
                      "value": "small",
                      "type": "[String]"
                    }
                  ],
                  "storageKey": "url(version:\"small\")"
                },
                v2
              ]
            },
            v1
          ]
        },
        v1
      ]
    },
    v2
  ]
};
})();
(node as any).hash = '5999447fc717a7fc54772016d68e6cb2';
export default node;
