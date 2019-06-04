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
                <item-form></item-form>
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
