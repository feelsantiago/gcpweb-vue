<template>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        <div class="card bg-secondary shadow">
            <div class="card-header bg-white border-0">
                <div class="row align-items-center">
                    <div class="col-8">
                        <h3 class="mb-0">Adicionar HQ</h3>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <item-form>
                    <h6 class="heading-small text-muted mb-4">Informações da Hq</h6>
                    <div class="pl-lg-4">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <base-input label="Numero" placeholder="Numero" type="number"></base-input>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <base-input label="Editora" placeholder="Editora"></base-input>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <base-input label="Universo" placeholder="Universo"></base-input>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <base-input label="Saga" placeholder="Saga"></base-input>
                                </div>
                            </div>
                        </div>
                    </div>
                </item-form>
            </div>
        </div>
    </base-header>
</template>

<script>
import ItemForm from "./ItemForm";

export default {
    name: "hq-form",
    components: { ItemForm }
};
</script>
