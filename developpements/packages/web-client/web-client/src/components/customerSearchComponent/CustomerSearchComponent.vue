<template>
  <div>
    <div class="q-pa-sm q-pa-md-md">
      <h4>{{ title }}</h4>
      <q-form @reset="resetForm"
              @submit="doSearchAll">
        <div class="q-pa-md">
          <div class="row q-col-gutter-xs q-col-gutter-md-md">
            <q-select v-model="form.codeFichierPartenaire"
                      :lazy-rules="true"
                      :options="fichPartOptions"
                      :rules="[mandatoryValidator]"
                      class="col-12 col-md-4"
                      emit-value
                      hint="Recherche possible (contient)"
                      input-debounce="0"
                      label="Fichier partenaire *"
                      map-options
                      option-value="code"
                      stack-label
                      use-input
                      @filter="filterFichPart"
                      @update:model-value="doOnFormChanged"
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    Aucun fichier partenaire trouvé
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
            <q-input v-model="form.chronoClient"
                     class="col-12 col-md-2"
                     hint="Format: 99999999"
                     label="N° de client"
                     mask="########"
                     stack-label />
            <q-input v-model="form.nom"
                     :lazy-rules="true"
                     :rules="[textValidatorToFixed3]"
                     class="col-12 col-md-4"
                     hint="Commence par (min: 3)"
                     label="Nom"
                     stack-label
                     @update:model-value="doOnFormChanged"
            />
            <q-input v-model="form.codePostal"
                     :lazy-rules="true"
                     :rules="[textValidatorToFixed2]"
                     class="col-12 col-md-2"
                     hint="Commence par (min: 2) - Format: 99999"
                     label="Code postal"
                     mask="#####"
                     stack-label
                     @update:model-value="doOnFormChanged"
            />
          </div>
          <q-list bordered
                  class="q-my-md rounded-borders">
            <q-expansion-item
                caption=""
                default-close
                expand-separator
                header-class="text-primary"
                icon="filter"
                label="Critères avancés..."
            >
              <q-card>
                <q-card-section>
                  <div class="row q-col-gutter-xs q-col-gutter-md-md">
                    <q-input v-model="form.prenom"
                             :lazy-rules="true"
                             :rules="[textValidatorToFixed3]"
                             class="col-12 col-md-3"
                             hint="Commence par (min: 3)"
                             label="Prénom"
                             stack-label
                             @update:model-value="doOnFormChanged"
                    />
                    <q-input v-model="form.ville"
                             :lazy-rules="true"
                             :rules="[textValidatorToFixed3]"
                             class="col-12 col-md-3"
                             hint="Commence par (min: 3)"
                             label="Ville"
                             stack-label
                             @update:model-value="doOnFormChanged"
                    />
                    <q-input v-model="form.dateDerniereCommandeFrom"
                             class="col-6 col-md-3"
                             hint="Date comprise"
                             label="Dernière commande après le"
                             stack-label
                             @update:model-value="doOnFormChanged"
                    >
                      <template v-slot:prepend>
                        <q-icon class="cursor-pointer"
                                color="primary"
                                name="event">
                          <q-popup-proxy ref="qDateProxy"
                                         cover
                                         transition-hide="scale"
                                         transition-show="scale">
                            <q-date v-model="form.dateDerniereCommandeFrom"
                                    mask="DD/MM/YYYY">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup
                                       color="primary"
                                       flat
                                       label="Fermer" />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input v-model="form.dateDerniereCommandeTo"
                             class="col-6 col-md-3"
                             hint="Date comprise"
                             label="Dernière commande avant le"
                             stack-label
                             @update:model-value="doOnFormChanged"
                    >
                      <template v-slot:prepend>
                        <q-icon class="cursor-pointer"
                                color="primary"
                                name="event">
                          <q-popup-proxy ref="qDateProxy"
                                         cover
                                         transition-hide="scale"
                                         transition-show="scale">
                            <q-date v-model="form.dateDerniereCommandeTo"
                                    mask="DD/MM/YYYY">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup
                                       color="primary"
                                       flat
                                       label="Fermer" />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>

          <div class="row justify-end">
            <q-btn :disable="!isFormChanged()"
                   color="primary"
                   icon="fa fa-search"
                   label="Rechercher"
                   type="submit"
            />
            <q-btn class="q-ml-sm"
                   color="primary"
                   flat
                   label="R.A.Z."
                   type="reset"
            />
          </div>
        </div>
      </q-form>
    </div>

    <div class="q-px-sm q-px-md-md">
      <q-table
          v-model:pagination="pagination"
          :columns="columns"
          :grid="$q.screen.lt.md"
          :loading="loading"
          :rows="searchAllResponse.list"
          binary-state-sort
          row-key="chronoClient"
          style="with: 100%"
          title="Liste des clients"
          @request="doPagination"
      >
      </q-table>
    </div>
  </div>
</template>

<script lang="ts"
        src="./CustomerSearchComponent.ts"></script>
<style lang="scss"
       src="./CustomerSearchComponent.scss"></style>
